import { useEffect, useState } from "react";
import { createReminder, deleteReminder, fetchReminders, type Reminder } from "./api";

export function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [title, setTitle] = useState('')
  const [scheduledAt, setScheduledAt] = useState('')

  async function loadReminders() {
    const data = await fetchReminders()
    setReminders(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!title || !scheduledAt) return

    await createReminder(title, new Date(scheduledAt).toISOString())
    setTitle('')
    setScheduledAt('')
    loadReminders()
  }

  async function handleDelete(id: number) {
    await deleteReminder(id)
    loadReminders()
  }

  useEffect(() => {
    loadReminders()

    const interval = setInterval(loadReminders, 1000)
    return () => clearInterval(interval)
  }, [])
  
  return(
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24, fontFamily: 'sans-serif' }}>
      <h1>⏰ Reminders (Cron Job Demo)</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Título do lembrete"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: 8 }}
        />
        <input
          type="datetime-local"
          value={scheduledAt}
          onChange={(e) => setScheduledAt(e.target.value)}
          style={{ padding: 8 }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Criar
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {reminders.map((r) => (
          <li
            key={r.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 12,
              marginBottom: 8,
              borderRadius: 8,
              background: r.sent ? '#d4f7dc' : '#fff3cd',
            }}
          >
            <div>
              <strong>{r.title}</strong>
              <div style={{ fontSize: 12, color: '#555' }}>
                {new Date(r.scheduledAt).toLocaleString()} —{' '}
                {r.sent ? '✅ Enviado' : '⏳ Pendente'}
              </div>
            </div>
            <button onClick={() => handleDelete(r.id)} style={{ padding: '4px 8px' }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
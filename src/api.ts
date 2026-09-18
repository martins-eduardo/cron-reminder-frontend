const API_URL = 'http://localhost:3333'

export type Reminder = {
    id: number
    title: string
    scheduledAt: string
    sent: boolean
    createdAt: string
}

export async function fetchReminders(): Promise<Reminder[]> {
    const res = await fetch(`${API_URL}/reminder/`)
    return res.json()
}

export async function createReminder(title: string, scheduledAt: string): Promise<Reminder> {
    const res = await fetch(`${API_URL}/reminder/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, scheduledAt})
    })
    return res.json()
}

export async function deleteReminder(id: number): Promise<void> {
    await fetch(`${API_URL}/reminder/${id}`, {method: "DELETE"})
}
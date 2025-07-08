import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../libs/supabase'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' })
    }

    const { data, error } = await supabase
      .from('emails')
      .insert([{ email }])

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ message: 'Email saved successfully' })
  }

  res.status(405).end()
}
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [filmes, setFilmes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('filmes').select()
      setFilmes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(filmes, null, 2)}</pre>
}
  import { createClient } from '@/utils/supabase/server';

  export default async function Usuarios() {
    const supabase = createClient();
    const { data: usuarios } = await supabase.from("usuarios").select();

    return <pre>{JSON.stringify(usuarios, null, 2)}</pre>
  }
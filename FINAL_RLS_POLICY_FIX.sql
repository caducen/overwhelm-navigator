-- Drop old policies if they exist (prevents conflicts)
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Allow public inserts" ON public.waitlist_signups;

-- Create the correct policy that allows anonymous inserts
CREATE POLICY "Allow public inserts" ON public.waitlist_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

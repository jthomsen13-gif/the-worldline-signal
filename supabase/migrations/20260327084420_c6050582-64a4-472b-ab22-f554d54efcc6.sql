
-- Create updates table
CREATE TABLE public.updates (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read updates" ON public.updates
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated can insert updates" ON public.updates
  FOR INSERT TO authenticated WITH CHECK (true);

-- Create checkpoints table
CREATE TABLE public.checkpoints (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  confidence integer DEFAULT 50,
  window_start date,
  window_end date,
  status text NOT NULL DEFAULT 'monitoring',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.checkpoints ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read checkpoints" ON public.checkpoints
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated can insert checkpoints" ON public.checkpoints
  FOR INSERT TO authenticated WITH CHECK (true);

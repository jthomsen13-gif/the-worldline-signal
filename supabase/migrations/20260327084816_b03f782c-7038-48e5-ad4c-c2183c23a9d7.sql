
CREATE TABLE public.predictions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  headline text NOT NULL,
  full_text text,
  trajectory text NOT NULL,
  timeframe text NOT NULL DEFAULT 'short',
  lead_time text,
  confidence integer NOT NULL DEFAULT 50,
  evidence_summary text,
  falsifiability text,
  convergence_id uuid,
  status text NOT NULL DEFAULT 'active',
  resolved_outcome text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  resolved_at timestamp with time zone
);

ALTER TABLE public.predictions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read predictions" ON public.predictions
  FOR SELECT TO public USING (true);

CREATE POLICY "Authenticated can insert predictions" ON public.predictions
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated can update predictions" ON public.predictions
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

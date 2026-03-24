
-- Create forecasts table
CREATE TABLE public.forecasts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  headline TEXT NOT NULL,
  trigger TEXT NOT NULL,
  lead_time TEXT NOT NULL,
  confidence INTEGER NOT NULL DEFAULT 50 CHECK (confidence >= 0 AND confidence <= 100),
  evidence_links JSONB DEFAULT '[]'::jsonb,
  falsifiability TEXT,
  chain JSONB DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  stack_ids UUID[] DEFAULT '{}'
);

-- Create convergences table
CREATE TABLE public.convergences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT,
  member_forecast_ids UUID[] DEFAULT '{}',
  impact_date TEXT,
  probability INTEGER DEFAULT 50 CHECK (probability >= 0 AND probability <= 100),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create scorecard table
CREATE TABLE public.scorecard (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  forecast_id UUID REFERENCES public.forecasts(id) ON DELETE CASCADE NOT NULL,
  outcome TEXT NOT NULL CHECK (outcome IN ('correct', 'incorrect', 'partial', 'pending')),
  reasoning TEXT,
  resolved_date TIMESTAMP WITH TIME ZONE
);

-- Create subscribers table
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  opted_in BOOLEAN NOT NULL DEFAULT true,
  unsubscribe_token UUID NOT NULL DEFAULT gen_random_uuid()
);

-- Create poll_votes table
CREATE TABLE public.poll_votes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  option TEXT NOT NULL,
  other_text TEXT,
  session_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.forecasts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.convergences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scorecard ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.poll_votes ENABLE ROW LEVEL SECURITY;

-- Forecasts: public read for active, all for authenticated
CREATE POLICY "Anyone can view active forecasts" ON public.forecasts FOR SELECT USING (status = 'active');
CREATE POLICY "Authenticated can view all forecasts" ON public.forecasts FOR SELECT TO authenticated USING (true);

-- Convergences: authenticated read only
CREATE POLICY "Authenticated can view convergences" ON public.convergences FOR SELECT TO authenticated USING (true);

-- Scorecard: authenticated read only
CREATE POLICY "Authenticated can view scorecard" ON public.scorecard FOR SELECT TO authenticated USING (true);

-- Subscribers: anyone can insert (sign up)
CREATE POLICY "Anyone can subscribe" ON public.subscribers FOR INSERT WITH CHECK (true);

-- Poll votes: anyone can insert
CREATE POLICY "Anyone can vote" ON public.poll_votes FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read poll results" ON public.poll_votes FOR SELECT USING (true);

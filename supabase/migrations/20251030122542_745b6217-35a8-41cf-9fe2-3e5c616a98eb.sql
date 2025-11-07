-- Create plans table
CREATE TABLE public.plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  original_price NUMERIC,
  billing_type TEXT NOT NULL CHECK (billing_type IN ('monthly', 'one-time')),
  features TEXT[],
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to plans
CREATE POLICY "Plans are viewable by everyone" 
ON public.plans 
FOR SELECT 
USING (true);

-- Create user_plans table
CREATE TABLE public.user_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES public.plans(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'in_cart' CHECK (status IN ('in_cart', 'active')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, plan_id, status)
);

-- Enable Row Level Security
ALTER TABLE public.user_plans ENABLE ROW LEVEL SECURITY;

-- Create policies for user_plans
CREATE POLICY "Users can view their own plans" 
ON public.user_plans 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own plans" 
ON public.user_plans 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own plans" 
ON public.user_plans 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own plans" 
ON public.user_plans 
FOR DELETE 
USING (auth.uid() = user_id);

-- Seed plans data
INSERT INTO public.plans (name, description, price, original_price, billing_type, features, category) VALUES
('Basic Plan', 'Perfect for small businesses and startups', 7500, 10000, 'monthly', 
 ARRAY['Social Media Automation', 'Smart Email Replies', 'Basic Analytics', '24/7 Support'], 
 'Social Media Management'),
 
('Professional Plan', 'Ideal for growing businesses', 12500, 15000, 'monthly', 
 ARRAY['Everything in Basic', 'AI Appointment Booking', 'Advanced Analytics', 'Priority Support', 'Custom Integrations'], 
 'Social Media Management'),
 
('Business Plan', 'For enterprises requiring full automation', 20000, 25000, 'monthly', 
 ARRAY['Everything in Professional', 'AI Calling Agents', 'Dedicated Account Manager', 'Custom Workflows', 'White Label Options'], 
 'Social Media Management'),
 
('WhatsApp Automation Add-On', 'Intelligent WhatsApp business integration', 1499, 2000, 'monthly', 
 ARRAY['Automated Responses', '24/7 Availability', 'Customer Segmentation', 'Campaign Management'], 
 'Add-On'),
 
('New Website', 'Complete website creation with AI', 30000, 50000, 'one-time', 
 ARRAY['Custom Design', 'Domain Setup', 'SEO Optimization', 'Responsive Design', '3 Months Free Maintenance'], 
 'Website'),
 
('Website Maintenance', 'Keep your existing website running smoothly', 2500, 3500, 'monthly', 
 ARRAY['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Technical Support'], 
 'Website');
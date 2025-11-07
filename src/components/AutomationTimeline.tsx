import { Timeline } from "@/components/ui/timeline";
import { Bot, Workflow, FileText, BarChart3, Zap, Brain } from "lucide-react";

export const AutomationTimeline = () => {
  const data = [
    {
      title: "AI Chatbots",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Intelligent Conversations</h4>
              <p className="text-muted-foreground leading-relaxed">
                Deploy AI chatbots that understand context, handle complex queries, and provide 24/7 customer support with natural language processing.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <div className="text-primary font-semibold mb-2">✓ Multi-language support</div>
              <p className="text-sm text-muted-foreground">Communicate in 50+ languages automatically</p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <div className="text-primary font-semibold mb-2">✓ Context awareness</div>
              <p className="text-sm text-muted-foreground">Remembers conversation history for better responses</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Workflows",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10">
              <Workflow className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Process Automation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Streamline complex business processes with intelligent automation that connects all your tools and eliminates manual tasks.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Automated data entry and validation</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Smart document processing</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Cross-platform integrations</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Real-time notifications and alerts</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Content AI",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Content Generation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Create high-quality content at scale using advanced AI models trained on your brand voice and style guidelines.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gradient-glow border border-primary/20 text-center">
              <div className="text-3xl font-bold text-primary mb-1">10x</div>
              <div className="text-sm text-muted-foreground">Faster content creation</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-glow border border-primary/20 text-center">
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Brand consistency</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Analytics",
      content: (
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-glass border border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Data Intelligence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Transform raw data into actionable insights with AI-powered analytics that predict trends and optimize performance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-primary/30 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-semibold">Real-time insights</div>
            </div>
            <div className="p-4 rounded-xl border border-primary/30 text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-semibold">Predictive analytics</div>
            </div>
            <div className="p-4 rounded-xl border border-primary/30 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm font-semibold">Custom dashboards</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};

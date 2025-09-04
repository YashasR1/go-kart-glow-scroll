import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Route, RotateCcw, Zap, CloudRain } from "lucide-react";

const TipsAndTricks = () => {
  const tips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Braking for Maximum Speed",
      description: "Maintain momentum through proper weight distribution",
      content: "To maintain momentum, lean back during braking. This keeps weight on the rear wheels, maximizing traction and allowing you to stop more effectively before a corner."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "The Racing Line",
      description: "The fastest and most efficient path around the track",
      content: "The \"line\" is the fastest and most efficient path around the track. It involves using the full width of the track to make corners as straight as possible, maximizing your speed."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Cornering Technique",
      description: "Master the art of taking corners efficiently",
      content: "Brake in a straight line before turning smoothly towards the inside apex. Lean your body away from the turn to increase grip, and remember that your exit speed is more important than your entry speed."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Overtaking",
      description: "Strategic passing techniques",
      content: "Pass opponents by braking later on the inside of a corner, ensuring they see you. Alternatively, take a wider line to get on the throttle earlier and pass them with a faster corner exit."
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "Driving on a Wet Track",
      description: "Adapted techniques for wet conditions",
      content: "In wet conditions, brake in a short, sharp motion. Turn the wheel hard with your weight shifted forward to pivot the kart, then accelerate slowly with your weight on the rear to find traction."
    }
  ];

  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Racing <span className="text-primary">Tips & Tricks</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master these professional techniques to dominate the track and become a go-karting champion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {tip.icon}
                  </div>
                  {/* <div className="text-sm font-semibold text-primary">
                    1.{index + 1}
                  </div> */}
                </div>
                <CardTitle className="text-xl">{tip.title}</CardTitle>
                <CardDescription>{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsAndTricks;
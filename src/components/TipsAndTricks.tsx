import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Route, RotateCcw, Zap, CloudRain } from "lucide-react";

const TipsAndTricks = () => {
  const tips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Braking for Maximum Speed",
      description: "Master the art of preserving momentum through corners",
      content: "Confused !!! Yes braking is a very important technique to master to preserve your momentum through the corners. Most racers on the track go into some kind of 'race mode' where they lean forward in the seat and tuck in as they want to go faster and faster. This slows you down in the braking zones as you take weight off the rear wheels which need to bite in order to stop your kart. The tip is to keep your weight on the rear wheels and keep your head up which gives you more traction while braking."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "The Line",
      description: "Find the safest and fastest way around the track",
      content: "Wondering what the line is ?? The line is the safest and fastest way around the track. It might not always be the shortest, but it is surely the most efficient way for braking and acceleration. If you can drive this line smoothly and quickly you will definitely dominate the track. The basic idea of the 'Fast Line' is to make your corner entries as wide as possible."
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Cornering",
      description: "Master the art of taking corners efficiently",
      content: "Kart drivers often turn in too early to corners, try to keep the kart straight for as long as possible before you turn in. Lean your body out of the turn, and not into the turn, and get your body into position well before the turn in point. The trick is to place your kart on the outside of the track. At the right moment, ease onto the brakes firmly staying in a straight line. Come off the break and ease back onto the throttle as you turn into the corner. Maintain the power and aim for the inside edge of the track as you turn into the corner. Maintaining the power is crucial to ensure you have plenty of speed coming out of the turn. It's not how fast you get into the corner but rather how fast you exit. Always remember any sudden movements on the brake, throttle or steering causes resistance and slows you down through the corners, so keep it as smooth as possible."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Passing or Overtaking",
      description: "Two basic techniques to get ahead",
      content: "There are two basic techniques to overtake:\n\n- The late braking technique: You should be able to outbrake your opponent, so that you get the advantage of the inside, however you will have a tighter line and will be able to pull away with the speed coming out of the corner. Tip: Avoid diving into the corner to avoid accident and disqualification, Make sure the opponent has seen you and if you are not level with him before the opponent starts turning, back off.\n\n- Early exit technique: This technique is to start accelerating before your opponent does, you will need a wider line into the corner and head forward as your opponent is still coming out of the corner."
    },
    {
      icon: <CloudRain className="w-6 h-6" />,
      title: "Driving on a Wet Track",
      description: "Everything works in the opposite direction here",
      content: "Everything works in the opposite direction here:\n\n- Brake quickly in a very sharp motion so that you dont kill the kart.\n- Turn should be full and hard with your weight shifted forward, it acts as a front brake and the kart turns sharply when it finds a little grip and reduces the chances of sliding and spinning.\n- Shift your weight on to the rear wheels and Accelerate slowly, try to find as much traction as possible."
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
                  <div className="text-sm font-semibold text-primary">
                    1.{index + 1}
                  </div>
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
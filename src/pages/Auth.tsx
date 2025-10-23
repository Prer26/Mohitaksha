import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { AtomIcon, Zap, Users, BookOpen } from "lucide-react";

const Auth = () => {
  const [userType, setUserType] = useState<"student" | "teacher">("student");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen particle-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-5xl bg-card/80 backdrop-blur-xl border-primary/20 shadow-2xl relative z-10">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Branding */}
          <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-l-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <AtomIcon className="w-12 h-12 text-primary animate-spin-slow" />
                <div>
                  <h1 className="text-4xl font-bold text-glow">AJA FORUM</h1>
                  <p className="text-lg text-primary">FOR PHYSICS</p>
                </div>
              </div>
              <p className="text-foreground/80 text-lg">
                Explore the universe of physics. Connect with experts. Expand your knowledge.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-foreground/90">Real-time Q&A with teachers</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-secondary" />
                  <span className="text-foreground/90">Comprehensive study materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-accent" />
                  <span className="text-foreground/90">Interactive learning community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Auth forms */}
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="text-center md:hidden mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AtomIcon className="w-8 h-8 text-primary" />
                  <h1 className="text-2xl font-bold text-glow">AJA FORUM</h1>
                </div>
                <p className="text-sm text-primary">FOR PHYSICS</p>
              </div>

              {/* User Type Selector */}
              <div className="flex gap-4 mb-6">
                <Button
                  variant={userType === "student" ? "hero" : "outline"}
                  className="flex-1"
                  onClick={() => setUserType("student")}
                >
                  Student
                </Button>
                <Button
                  variant={userType === "teacher" ? "hero" : "outline"}
                  className="flex-1"
                  onClick={() => setUserType("teacher")}
                >
                  Teacher
                </Button>
              </div>

              <Tabs value={isLogin ? "login" : "register"} onValueChange={(v) => setIsLogin(v === "login")} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-muted/50">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password">Password</Label>
                      <Link to="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={() => {
                      if (userType === "student") {
                        window.location.href = "/student-portal";
                      } else {
                        window.location.href = "/teacher-portal";
                      }
                    }}
                  >
                    Login as {userType}
                  </Button>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Full Name</Label>
                    <Input
                      id="register-name"
                      type="text"
                      placeholder="John Doe"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-confirm">Confirm Password</Label>
                    <Input
                      id="register-confirm"
                      type="password"
                      placeholder="••••••••"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button variant="hero" className="w-full">
                    Register as {userType}
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Auth;

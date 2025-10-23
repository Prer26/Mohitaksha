import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageSquare,
  Download,
  Bell,
  Search,
  Plus,
  Upload,
  BookOpen,
  Zap,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { toast } from "sonner";


const StudentPortal = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What is quantum entanglement?",
      status: "answered",
      timestamp: "2 hours ago",
      teacher: "Dr. Smith",
    },
    {
      id: 2,
      question: "How does the Heisenberg uncertainty principle work?",
      status: "pending",
      timestamp: "5 hours ago",
    },
  ]);

  const [notes] = useState([
    {
      id: 1,
      title: "Classical Mechanics - Newton's Laws",
      teacher: "Dr. Johnson",
      date: "2 days ago",
      type: "PDF",
    },
    {
      id: 2,
      title: "Quantum Physics Lecture Notes",
      teacher: "Dr. Smith",
      date: "1 week ago",
      type: "Video",
    },
  ]);

  return (
    <div className="min-h-screen particle-bg">
      {/* Header with Navigation */}
      <header className="border-b border-primary/20 bg-card/50 backdrop-blur-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-glow">Student Portal</h1>
                  <p className="text-xs text-muted-foreground">AJA Forum for Physics</p>
                </div>
              </div>
              
              {/* Navigation Menu */}
              <nav className="hidden md:flex items-center gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={activeSection === "home" ? "text-primary" : ""}
                  onClick={() => setActiveSection("home")}
                >
                  Home
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "about" ? "text-primary" : ""}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "reviews" ? "text-primary" : ""}
                  onClick={() => setActiveSection("reviews")}
                >
                  Reviews
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "ask" ? "text-primary" : ""}
                  onClick={() => setActiveSection("ask")}
                >
                  Ask Questions
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "view" ? "text-primary" : ""}
                  onClick={() => setActiveSection("view")}
                >
                  View Questions
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "notes" ? "text-primary" : ""}
                  onClick={() => setActiveSection("notes")}
                >
                  Download Notes
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {activeSection === "home" && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{questions.length}</p>
                    <p className="text-sm text-muted-foreground">Questions Asked</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/30 hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {questions.filter((q) => q.status === "answered").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Answered</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Download className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{notes.length}</p>
                    <p className="text-sm text-muted-foreground">Resources</p>
                  </div>
                </div>
              </Card>
              </div>

              {/* Tabs for Questions and Notes */}
              <Tabs defaultValue="questions" className="w-full">
              <TabsList className="bg-muted/50 w-full justify-start">
                <TabsTrigger value="questions">My Questions</TabsTrigger>
                <TabsTrigger value="notes">Study Materials</TabsTrigger>
                <TabsTrigger value="ask">Ask Question</TabsTrigger>
              </TabsList>

              {/* My Questions Tab */}
              <TabsContent value="questions" className="space-y-4 mt-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search questions..."
                    className="bg-background/50 border-primary/30"
                  />
                  <Button variant="outline" size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                {questions.map((q) => (
                  <Card
                    key={q.id}
                    className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant={q.status === "answered" ? "default" : "secondary"}
                            className={
                              q.status === "answered"
                                ? "bg-success/20 text-success border-success/50"
                                : "bg-muted/50 text-muted-foreground"
                            }
                          >
                            {q.status === "answered" ? (
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                            ) : (
                              <Clock className="w-3 h-3 mr-1" />
                            )}
                            {q.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{q.timestamp}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
                        {q.teacher && (
                          <p className="text-sm text-primary">Answered by {q.teacher}</p>
                        )}
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Study Materials Tab */}
              <TabsContent value="notes" className="space-y-4 mt-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Search materials..."
                    className="bg-background/50 border-primary/30"
                  />
                  <Button variant="outline" size="icon">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                {notes.map((note) => (
                  <Card
                    key={note.id}
                    className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                          {note.type === "PDF" ? (
                            <BookOpen className="w-6 h-6 text-secondary" />
                          ) : (
                            <Zap className="w-6 h-6 text-accent" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{note.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            by {note.teacher} • {note.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="hero" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Ask Question Tab */}
              <TabsContent value="ask" className="space-y-4 mt-6">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
                  <h3 className="text-xl font-semibold mb-6">Post Your Question</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Question</label>
                      <Textarea
                        placeholder="Describe your question in detail..."
                        className="min-h-32 bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Add Media (Optional)
                      </label>
                      <Button variant="outline" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Image/Video/Audio
                      </Button>
                    </div>
                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => {
                        toast.success("Question posted successfully!", {
                          description: "A teacher will answer your question soon.",
                        });
                      }}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Post Question
                    </Button>
                  </div>
                </Card>
              </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Question Answered</p>
                    <p className="text-xs text-muted-foreground">Dr. Smith answered your question</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-info mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">New Material</p>
                    <p className="text-xs text-muted-foreground">Quantum Physics notes uploaded</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-primary/30">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our teachers are here to help you understand physics concepts.
              </p>
              <Button variant="hero" className="w-full">
                Ask a Question
              </Button>
            </Card>
          </div>
        </div>
        )}

        {activeSection === "about" && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30">
              <h2 className="text-3xl font-bold mb-6 text-glow">About Student Portal</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Welcome to the AJA Forum for Physics Student Portal - your gateway to mastering physics concepts through interactive learning and expert guidance.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6">What You Can Do:</h3>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span><strong className="text-foreground">Ask Questions:</strong> Post your physics questions via text, audio, or video and receive detailed answers from experienced teachers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span><strong className="text-foreground">Access Resources:</strong> Download comprehensive study materials including notes, slides, and video lectures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span><strong className="text-foreground">Track Progress:</strong> Monitor your learning journey with detailed statistics and activity tracking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span><strong className="text-foreground">Get Notifications:</strong> Receive instant alerts when teachers answer your questions or upload new materials.</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6">
                  Our platform is designed to make physics accessible, engaging, and fun. Whether you are preparing for exams or exploring advanced concepts, our teachers are here to support your learning journey.
                </p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "reviews" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30">
              <h2 className="text-3xl font-bold mb-6 text-glow">Student Reviews</h2>
              
              {/* Review Form */}
              <div className="mb-8 p-6 bg-muted/30 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Review</label>
                    <Textarea
                      placeholder="Tell us about your experience with AJA Forum..."
                      className="min-h-32 bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button key={star} variant="outline" size="sm" className="hover:bg-primary/20">
                          ⭐
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button
                    variant="hero"
                    onClick={() => {
                      toast.success("Review submitted!", {
                        description: "Thank you for your feedback!",
                      });
                    }}
                  >
                    Submit Review
                  </Button>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">Grade 11 Student</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "This platform has completely transformed how I learn physics! The teachers are incredibly helpful and respond quickly to my questions. The study materials are comprehensive and easy to understand."
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">Grade 12 Student</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "I love the ability to ask questions through video! It makes explaining complex problems so much easier. The notification system keeps me updated whenever there is an answer."
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Emily Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">Grade 10 Student</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "Great platform with excellent resources! The interface is beautiful and easy to navigate. My only wish is for more video lectures on advanced topics."
                  </p>
                </Card>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "ask" && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
              <h3 className="text-xl font-semibold mb-6">Post Your Question</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Question</label>
                  <Textarea
                    placeholder="Describe your question in detail..."
                    className="min-h-32 bg-background/50 border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Add Media (Optional)
                  </label>
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image/Video/Audio
                  </Button>
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    toast.success("Question posted successfully!", {
                      description: "A teacher will answer your question soon.",
                    });
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Post Question
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "view" && (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex gap-2 mb-6">
              <Input
                placeholder="Search questions..."
                className="bg-background/50 border-primary/30"
              />
              <Button variant="outline" size="icon">
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {questions.map((q) => (
              <Card
                key={q.id}
                className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant={q.status === "answered" ? "default" : "secondary"}
                        className={
                          q.status === "answered"
                            ? "bg-success/20 text-success border-success/50"
                            : "bg-muted/50 text-muted-foreground"
                        }
                      >
                        {q.status === "answered" ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <Clock className="w-3 h-3 mr-1" />
                        )}
                        {q.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{q.timestamp}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{q.question}</h3>
                    {q.teacher && (
                      <p className="text-sm text-primary">Answered by {q.teacher}</p>
                    )}
                  </div>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeSection === "notes" && (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex gap-2 mb-6">
              <Input
                placeholder="Search materials..."
                className="bg-background/50 border-primary/30"
              />
              <Button variant="outline" size="icon">
                <Search className="w-4 h-4" />
              </Button>
            </div>

            {notes.map((note) => (
              <Card
                key={note.id}
                className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      {note.type === "PDF" ? (
                        <BookOpen className="w-6 h-6 text-secondary" />
                      ) : (
                        <Zap className="w-6 h-6 text-accent" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{note.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        by {note.teacher} • {note.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="hero" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPortal;

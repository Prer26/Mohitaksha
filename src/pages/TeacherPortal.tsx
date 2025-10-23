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
  Upload,
  Bell,
  Search,
  BookOpen,
  Users,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

const TeacherPortal = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");
  const [questions] = useState([
    {
      id: 1,
      student: "Alice Johnson",
      question: "Can you explain the photoelectric effect?",
      status: "pending",
      timestamp: "30 minutes ago",
    },
    {
      id: 2,
      student: "Bob Smith",
      question: "What is the difference between speed and velocity?",
      status: "pending",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      student: "Carol White",
      question: "How does a particle accelerator work?",
      status: "answered",
      timestamp: "2 hours ago",
    },
  ]);

  const [uploads] = useState([
    { id: 1, title: "Classical Mechanics - Week 3", date: "2 days ago", downloads: 45 },
    { id: 2, title: "Quantum Physics Intro", date: "1 week ago", downloads: 78 },
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
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-glow">Teacher Portal</h1>
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
                  className={activeSection === "answer" ? "text-primary" : ""}
                  onClick={() => setActiveSection("answer")}
                >
                  Answer Questions
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={activeSection === "upload" ? "text-primary" : ""}
                  onClick={() => setActiveSection("upload")}
                >
                  Upload Notes
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
                    <p className="text-2xl font-bold">
                      {questions.filter((q) => q.status === "pending").length}
                    </p>
                    <p className="text-sm text-muted-foreground">Pending Questions</p>
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
                    <p className="text-sm text-muted-foreground">Answered Today</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/30 hover-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{uploads.length}</p>
                    <p className="text-sm text-muted-foreground">Materials Shared</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Tabs for Questions and Uploads */}
            <Tabs defaultValue="questions" className="w-full">
              <TabsList className="bg-muted/50 w-full justify-start">
                <TabsTrigger value="questions">Student Questions</TabsTrigger>
                <TabsTrigger value="upload">Upload Materials</TabsTrigger>
                <TabsTrigger value="materials">My Uploads</TabsTrigger>
              </TabsList>

              {/* Student Questions Tab */}
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
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge
                              variant={q.status === "answered" ? "default" : "secondary"}
                              className={
                                q.status === "answered"
                                  ? "bg-success/20 text-success border-success/50"
                                  : "bg-accent/20 text-accent border-accent/50"
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
                          <p className="text-sm text-primary mb-2">Asked by {q.student}</p>
                          <h3 className="text-lg font-semibold">{q.question}</h3>
                        </div>
                      </div>

                      {q.status === "pending" && (
                        <div className="space-y-3">
                          <Textarea
                            placeholder="Type your answer here..."
                            className="min-h-24 bg-background/50 border-primary/30"
                          />
                          <div className="flex gap-2">
                            <Button variant="hero" size="sm">
                              <CheckCircle2 className="w-4 h-4 mr-2" />
                              Submit Answer
                            </Button>
                            <Button variant="outline" size="sm">
                              <Upload className="w-4 h-4 mr-2" />
                              Add Media
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Upload Materials Tab */}
              <TabsContent value="upload" className="space-y-4 mt-6">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
                  <h3 className="text-xl font-semibold mb-6">Upload Study Material</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Material Title</label>
                      <Input
                        placeholder="e.g., Quantum Mechanics - Lecture 5"
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Description</label>
                      <Textarea
                        placeholder="Brief description of the material..."
                        className="min-h-24 bg-background/50 border-primary/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject/Topic</label>
                      <Input
                        placeholder="e.g., Quantum Physics"
                        className="bg-background/50 border-primary/30"
                      />
                    </div>
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                      <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Drag and drop your files here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: PDF, PPT, Video, Audio
                      </p>
                      <Button variant="outline" className="mt-4">
                        Choose Files
                      </Button>
                    </div>
                    <Button
                      variant="hero"
                      className="w-full"
                      onClick={() => {
                        toast.success("Material uploaded successfully!", {
                          description: "Students can now access your material.",
                        });
                      }}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Material
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              {/* My Uploads Tab */}
              <TabsContent value="materials" className="space-y-4 mt-6">
                {uploads.map((upload) => (
                  <Card
                    key={upload.id}
                    className="p-6 bg-card/80 backdrop-blur-sm border-primary/30 hover-glow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{upload.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {upload.date} • {upload.downloads} downloads
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </Card>
                ))}
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
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New Question</p>
                      <p className="text-xs text-muted-foreground">Alice asked about photoelectric effect</p>
                      <p className="text-xs text-muted-foreground">30 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-info mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Material Downloaded</p>
                      <p className="text-xs text-muted-foreground">5 students downloaded your notes</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-primary/30">
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <div className="space-y-2 mt-4">
                  <Button variant="hero" className="w-full" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Material
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    View All Questions
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === "about" && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30">
              <h2 className="text-3xl font-bold mb-6 text-glow">About Teacher Portal</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Welcome to the AJA Forum for Physics Teacher Portal - your comprehensive platform for guiding students through their physics learning journey.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6">What You Can Do:</h3>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span><strong className="text-foreground">Answer Questions:</strong> Respond to student questions via text, audio, or video with detailed explanations and examples.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span><strong className="text-foreground">Share Resources:</strong> Upload notes, slides, PDFs, and video lectures to help students master physics concepts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span><strong className="text-foreground">Track Impact:</strong> Monitor how many students you have helped and track downloads of your materials.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span><strong className="text-foreground">Stay Connected:</strong> Receive instant notifications when students post new questions.</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed mt-6">
                  As an educator on this platform, you have the power to inspire curiosity and foster deep understanding of physics. Your expertise helps shape the next generation of scientists and engineers.
                </p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "reviews" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/30">
              <h2 className="text-3xl font-bold mb-6 text-glow">Teacher Reviews</h2>
              
              {/* Sample Reviews from Students */}
              <div className="space-y-4">
                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Review from Sarah Johnson</h4>
                      <p className="text-sm text-muted-foreground">About Dr. Smith</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "Dr. Smith explains quantum mechanics in such a clear way! His video explanations helped me finally understand wave-particle duality. Thank you!"
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Review from Michael Chen</h4>
                      <p className="text-sm text-muted-foreground">About Prof. Johnson</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "Prof. Johnson responded to my question within an hour! The detailed answer with diagrams made everything so much clearer. Best teacher on the platform!"
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Review from Emily Rodriguez</h4>
                      <p className="text-sm text-muted-foreground">About Dr. Williams</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "Dr. Williams study materials are comprehensive and well-organized. The lecture notes helped me ace my physics exam!"
                  </p>
                </Card>

                <Card className="p-6 bg-background/50 border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Review from David Park</h4>
                      <p className="text-sm text-muted-foreground">About Prof. Thompson</p>
                    </div>
                    <div className="text-yellow-500">⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground">
                    "Very patient and thorough in explanations. Prof. Thompson takes time to ensure I understand the concepts before moving forward."
                  </p>
                </Card>
              </div>
            </Card>
          </div>
        )}

        {activeSection === "answer" && (
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
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant={q.status === "answered" ? "default" : "secondary"}
                          className={
                            q.status === "answered"
                              ? "bg-success/20 text-success border-success/50"
                              : "bg-accent/20 text-accent border-accent/50"
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
                      <p className="text-sm text-primary mb-2">Asked by {q.student}</p>
                      <h3 className="text-lg font-semibold">{q.question}</h3>
                    </div>
                  </div>

                  {q.status === "pending" && (
                    <div className="space-y-3">
                      <Textarea
                        placeholder="Type your answer here..."
                        className="min-h-24 bg-background/50 border-primary/30"
                      />
                      <div className="flex gap-2">
                        <Button variant="hero" size="sm">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Submit Answer
                        </Button>
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          Add Media
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeSection === "upload" && (
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/30">
              <h3 className="text-xl font-semibold mb-6">Upload Study Material</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Material Title</label>
                  <Input
                    placeholder="e.g., Quantum Mechanics - Lecture 5"
                    className="bg-background/50 border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea
                    placeholder="Brief description of the material..."
                    className="min-h-24 bg-background/50 border-primary/30"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject/Topic</label>
                  <Input
                    placeholder="e.g., Quantum Physics"
                    className="bg-background/50 border-primary/30"
                  />
                </div>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Drag and drop your files here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, PPT, Video, Audio
                  </p>
                  <Button variant="outline" className="mt-4">
                    Choose Files
                  </Button>
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => {
                    toast.success("Material uploaded successfully!", {
                      description: "Students can now access your material.",
                    });
                  }}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Material
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherPortal;

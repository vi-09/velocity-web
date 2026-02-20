import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Index2 from "./pages/Index2";
import Index3 from "./pages/Index3";
import Index4 from "./pages/Index4";
import Index5 from "./pages/Index5";
import Index6 from "./pages/Index6";
import Index7 from "./pages/Index7";
import Index8 from "./pages/Index8";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/about" element={<Index2 />} />
            <Route path="/roboracer" element={<Index3 />} />
            <Route path="/outreach" element={<Index4 />} />
            <Route path="/vgp" element={<Index5 />} />
            <Route path="/join" element={<Index6 />} />
            <Route path="/sponsor" element={<Index7 />} />
            <Route path="/contact" element={<Index8 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

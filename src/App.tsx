import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import FilmGrain from "@/components/FilmGrain";
import CustomCursor from "@/components/motion/CustomCursor";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import Index from "./pages/Index";
import Products from "./pages/Products";
import FreeToolPage from "./pages/FreeToolPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <SmoothScrollProvider>
        <TooltipProvider>
          <FilmGrain />
          <CustomCursor />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/coaching" element={<Navigate to="/" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/free-tool" element={<FreeToolPage />} />
              <Route path="/split-finder" element={<FreeToolPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SmoothScrollProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;

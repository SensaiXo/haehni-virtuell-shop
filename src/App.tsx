
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import UeberUns from "./pages/UeberUns";
import OnlineBuchung from "./pages/OnlineBuchung";
import Products from "./pages/Products";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/buchung" element={<OnlineBuchung />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl">Blog - Coming Soon</h1></div>} />
            <Route path="/datenschutz" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl">Datenschutz - Coming Soon</h1></div>} />
            <Route path="/impressum" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl">Impressum - Coming Soon</h1></div>} />
            <Route path="/agb" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl">AGB - Coming Soon</h1></div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

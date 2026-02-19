import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingCallButton from "./components/ui/FloatingCallButton";
import Index from "./pages/Index";
import WaterSoftenerBurnsvilleMN from "./pages/WaterSoftenerBurnsvilleMN";
import WaterSoftenerColumbiaMO from "./pages/WaterSoftenerColumbiaMO";
import WaterSoftenerChippewaFalls from "./pages/WaterSoftenerChippewaFalls";
import WaterSoftenerFreeportIL from "./pages/WaterSoftenerFreeportIL";
import WaterSoftenerHendersonNV from "./pages/WaterSoftenerHendersonNV";
import WaterSoftenerJacksonMI from "./pages/WaterSoftenerJacksonMI";
import WaterSoftenerLafayetteIN from "./pages/WaterSoftenerLafayetteIN";
import WaterSoftenerLoganUtah from "./pages/WaterSoftenerLoganUtah";
import WaterSoftenerMapleGroveMN from "./pages/WaterSoftenerMapleGroveMN";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <FloatingCallButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/water-softener-repair-burnsville-mn" element={<WaterSoftenerBurnsvilleMN />} />
          <Route path="/water-softener-repair-columbia-mo" element={<WaterSoftenerColumbiaMO />} />
          <Route path="/water-softener-repair-chippewa-falls" element={<WaterSoftenerChippewaFalls />} />
          <Route path="/water-softener-repair-freeport-il" element={<WaterSoftenerFreeportIL />} />
          <Route path="/water-softener-repair-henderson-nv" element={<WaterSoftenerHendersonNV />} />
          <Route path="/water-softener-repair-jackson-mi" element={<WaterSoftenerJacksonMI />} />
          <Route path="/water-softener-repair-lafayette-indiana" element={<WaterSoftenerLafayetteIN />} />
          <Route path="/water-softener-repair-logan-utah" element={<WaterSoftenerLoganUtah />} />
          <Route path="/water-softener-repair-maple-grove-mn" element={<WaterSoftenerMapleGroveMN />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


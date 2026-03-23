import { Bell, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AlertsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary flex items-center gap-2">
            <Bell className="w-8 h-8" />
            Price Alerts
          </h1>
          <p className="text-muted-foreground mt-2">
            Kelola peringatan dini dan notifikasi perubahan harga komoditas (Hanya untuk pengguna terdaftar).
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Buat Alert Baru
        </Button>
      </div>

      <div className="grid gap-4 mt-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <CardTitle className="text-lg">Cabai Merah Keriting</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Alert: Harga melebihi Rp 80.000 / kg
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center bg-muted p-3 rounded-md">
              <span className="text-sm">Status Saat Ini: Rp 85.000 (Tercapai)</span>
              <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-sidebar-accent">
                Lihat Detail
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-secondary" />
              <CardTitle className="text-lg">Beras Medium</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Alert: Harga prediksi naik di atas Rp 15.000 / kg
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex justify-between items-center bg-muted p-3 rounded-md">
              <span className="text-sm">Status Saat Ini: Rp 14.500 (Aman)</span>
              <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-sidebar-accent">
                Lihat Detail
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

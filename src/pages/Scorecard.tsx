import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const SCORECARD_ROWS = [
  {
    signal: "Oil price range 16–20 Mar",
    predicted: "2026-03-14",
    resolved: "2026-03-20",
    result: "VALIDATED",
    confidence: "90–95%",
  },
  {
    signal: "Iran Hormuz toll system",
    predicted: "2026-03-15",
    resolved: "2026-03-20",
    result: "VALIDATED",
    confidence: "90–95%",
  },
  {
    signal: "Ras Laffan 3–5yr offline",
    predicted: "2026-03-18",
    resolved: "2026-03-20",
    result: "VALIDATED",
    confidence: "90–95%",
  },
];

const Scorecard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Scorecard
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        What we got right and wrong. No spin.
      </p>

      <div className="mt-14 rounded-lg border border-border/50 bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Signal</TableHead>
              <TableHead>Predicted</TableHead>
              <TableHead>Resolved</TableHead>
              <TableHead>Result</TableHead>
              <TableHead>Confidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {SCORECARD_ROWS.map((row) => (
              <TableRow key={row.signal}>
                <TableCell className="font-medium text-foreground">
                  {row.signal}
                </TableCell>
                <TableCell className="font-mono text-[13px] text-muted-foreground">
                  {row.predicted}
                </TableCell>
                <TableCell className="font-mono text-[13px] text-muted-foreground">
                  {row.resolved}
                </TableCell>
                <TableCell>
                  <span className="inline-block rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-green-800">
                    {row.result}
                  </span>
                </TableCell>
                <TableCell className="font-mono text-[13px] text-muted-foreground">
                  {row.confidence}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
    <Footer />
  </div>
);

export default Scorecard;

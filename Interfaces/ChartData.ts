export interface ChartData {
  labels: string;
  datasets: CDataset[];
}

interface CDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string;
  borderWidth: number;
}

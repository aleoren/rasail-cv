export default function RiwayatPendidikan() {
    return (
<div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN 1 Cisaruni" tahun="2010 - 2016" />
        <RowRiwayat jenjang="SMP" sekolah="SMPN 1 Singaparna" tahun="2016 - 2018" />
        <RowRiwayat jenjang="SMA" sekolah="SMAN 2 Singaparna" tahun="2018 - 2022" />
        <RowRiwayat jenjang="Sarjana (S1)" sekolah="Universitas Ma'soem" tahun="2022 - 2026" />
      </div>
      );
      }

      interface RowRiwayatProps {
        jenjang: string;
        sekolah: string;
        tahun: string;
      }     

function RowRiwayat(props: RowRiwayatProps) {
    return (
      <div className="border-2 border-yellow-500/75 rounded-lg bg-white-800 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">{props.jenjang}</div>
            <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
            <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );
  }
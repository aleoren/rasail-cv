export default function RiwayatPekerjaan() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl">Riwayat Pekerjaan</h2>
            <RowRiwayat posisi="Intern" perusahaan="PT. Contoh Perusahaan" tahun="2020 - 2021"/>
            <RowRiwayat posisi="Junior Developer" perusahaan="CV. Teknologi Canggih" tahun="2021 - 2023"/>
            <RowRiwayat posisi="Senior Developer" perusahaan="PT. Inovasi Digital" tahun="2023 - Sekarang"/>
        </div>
    );
}

interface RowRiwayatProps {
    posisi: string;
    perusahaan: string;
    tahun: string;
}     

function RowRiwayat(props: RowRiwayatProps) {
    return (
        <div className="border-2 border-yellow-500/75 rounded-lg bg-white-800 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">{props.posisi}</div>
                    <div className="col-span-12 md:col-span-4">{props.perusahaan}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                </div>
            </div>
        </div>
    );
}

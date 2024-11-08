export default function skills() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
            <h2 className="text-2xl">Skills</h2>
            <RowSkill skill="JavaScript" level="Advanced" tahun="2018 - Sekarang"/>
            <RowSkill skill="React" level="Intermediate" tahun="2020 - Sekarang"/>
            <RowSkill skill="Node.js" level="Intermediate" tahun="2021 - Sekarang"/>
        </div>
    );
}

interface RowSkillProps {
    skill: string;
    level: string;
    tahun: string;
}     

function RowSkill(props: RowSkillProps) {
    return (
        <div className="border-2 border-yellow-500/75 rounded-lg bg-white-800 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4">{props.skill}</div>
                    <div className="col-span-12 md:col-span-4">{props.level}</div>
                    <div className="col-span-12 md:col-span-4">{props.tahun}</div>
                </div>
            </div>
        </div>
    );
}

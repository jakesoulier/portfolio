import Image from "next/image";

const Card = ({ icons = [], languages = [] }) => {
    return (
    <div className="bg_cream text_dark text-center h-full w-96 m-5">
        <Image
            src="/asteroidImg.png"
            alt="Bench Jake With Backpack"
            width={384}
            height={384}
        />
        {/* <div className="flex">
            {icons.map((Icon, index) => (
                <Icon key={index} />
            ))}
        </div> */}
        <div className="flex gap-1 p-2">
            {languages.map((language, index) => (
                <span
                    key={`lang-${index}`}
                    className="bg_dark text_cream rounded text-base p-1"
                >
                    {language}
                </span>
            ))}
        </div>
        <p></p>
    </div>
)
}
export default Card;
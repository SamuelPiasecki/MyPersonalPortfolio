import { useTranslation } from "react-i18next"
import brazil from "/assets/brazil.png"
import usa from "/assets/usa.png"

const languageOptions = [
    {
        name: "Português",
        value: "ptBR",
        flag: brazil
    },
    {
        name: "English",
        value: "en",
        flag: usa
    },
]

const Switcher = () => {

    const { i18n } = useTranslation();

    return (
        <div className="justify-end">
            {languageOptions.map((languageOption) => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value);
                    }}
                >
                    <img src={languageOption.flag} className="w-[30px] hover:w-[28px]" alt={languageOption.name} />
                </button>
            ))}
        </div>
    )
}

export default Switcher
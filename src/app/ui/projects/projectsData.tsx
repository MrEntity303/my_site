import skillsData from "@/ui/skills/skillsData";

const getSkillImg = (skillName: string) => {
    return skillsData.find(skill => skill.name === skillName)?.imgSrc || 'https://img.icons8.com/?size=100&id=39590&format=png&color=000000';
};
    const projects = [
        {
            title: 'RevGames',
            skills: [
                getSkillImg("Vue"),
                getSkillImg("Express"),
                getSkillImg("HTML5"),
                getSkillImg("CSS3"),
                getSkillImg("Node.js"),
                getSkillImg("JavaScript"),
                getSkillImg("MySQL"),
                getSkillImg("VsCode")
            ],
            description: 'Sito Web Recensione Videogiochi',
            isClosedSource: false,
            sourceUrl: 'https://github.com/MrEntity303/RevGames'
        },
        {
            title: 'Steganography Project',
            skills: [
                getSkillImg("C"),
                getSkillImg("JetBrains")
            ],
            description: 'Steganografo O.S University Project',
            isClosedSource: false,
            sourceUrl: 'https://github.com/MrEntity303/ST0830-O.S.Project',
        },
        {
            title: 'ChessBoard',
            skills: [
                getSkillImg("Java"),
                getSkillImg("Intellij")
            ],
            description: 'Gioco degli scacchi da terminale',
            isClosedSource: false,
            sourceUrl: 'https://github.com/MrEntity303/ChessBoard',
        },
        {
            title: 'LoyaltyPlatformIDS',
            skills: [
                getSkillImg("Java"),
                getSkillImg("SpringBoot"),
                getSkillImg("MySQL"),
                getSkillImg("Intellij")
            ],
            description: 'Software per un programma fedeltà',
            isClosedSource: false,
            sourceUrl: 'https://github.com/MrEntity303/LoyaltyPlatformIDS',
        },
        {
            title: 'MySpace',
            skills: [
                getSkillImg("Next.js"),
                getSkillImg("React"),
                getSkillImg("TypeScript"),
                getSkillImg("Node.js"),
                getSkillImg("Tailwind"),
                getSkillImg("VsCode")
            ],
            description: 'Il mio sito personale da Developer',
            isClosedSource: false,
            sourceUrl: 'https://github.com/MrEntity303/LoyaltyPlatformIDS',
        }
    ];
export default projects;
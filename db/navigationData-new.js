export const navigationData = [
    {
        label: "Home",
        href: "/",
        hasDropdown: false,
        isActive: true,
    },
    {
        label: "About Us",
        href: "/about",
        hasDropdown: false,
    },
    {
        label: "Services",
        href: "/services",
        hasDropdown: true,
        dropdownItems: [
            {
                label: "Track and Field",
                href: "/services/track-field",
                isActive: false
            },
            {
                label: "Speed Training",
                href: "/services/speed-training",
                isActive: false
            },
            {
                label: "Bodybuilding",
                href: "/services/bodybuilding",
                isActive: false
            },
            {
                label: "Archery",
                href: "/services/archery",
                isActive: false
            },
            {
                label: "Health & Wellness",
                href: "/services/health-wellness",
                isActive: false
            },
            {
                label: "Nutrition",
                href: "/services/nutrition",
                isActive: false
            }
        ]
    },
    {
        label: "Member Portal",
        href: "/login",
        hasDropdown: true,
        dropdownItems: [
            {
                label: "Login",
                href: "/login",
                isActive: false
            },
            {
                label: "Register",
                href: "/register",
                isActive: false
            },
            {
                label: "Apply Now",
                href: "/application",
                isActive: false
            }
        ]
    },
    {
        label: "Contact",
        href: "/contact",
        hasDropdown: false,
    },
];

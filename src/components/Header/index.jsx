import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenuAuth } from "../DropdownMenuAuth";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function Header() {
    const [darkMode, setDarkMode] = React.useState(() => {
        // Initialize from localStorage
        const saved = localStorage.getItem('darkMode');
        return saved === 'true';
    });

    // Apply dark mode on mount and when darkMode changes
    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className="bg-white dark:bg-background">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="Quick Blog"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Right side actions */}
                    <div className="flex items-center gap-3">
                        <Link to="/create-blog">
                            <Button className="bg-[#5044E5] hover:bg-[#5044E5]/90 text-white">
                                + Create Blog
                            </Button>
                        </Link>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="rounded-full"
                        >
                            {darkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>

                        <DropdownMenuAuth />
                    </div>
                </div>
            </div>
        </header>
    );
}

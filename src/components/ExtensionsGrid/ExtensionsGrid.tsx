import { ExtensionCard } from '../ExtensionCard/ExtensionCard'
import './ExtensionsGrid.css'
import type React from 'react';

// Props for ExtensionsGrid
interface Extension {
    logo: string;
    name: string;
    description: string;
    isActive?: boolean;
}
interface ExtensionsGridProps {
    extensions: Extension[];
    removeExtension: (name: string) => void;
    toggleActive: (name: string) => void;
}

// Grid component for the ExtensionCards
export const ExtensionsGrid: React.FC<ExtensionsGridProps> = ({extensions, removeExtension, toggleActive}) => {

    // Helper function to load the logo
    const getLogoPath = (logoName:string | undefined) => {
        if(!logoName) return '';
        try {
            return new URL(logoName, import.meta.url).href
        } catch (error) {
            console.error(`Failed to load logo: ${logoName}`, error);
            return ''            
        }
    }

    return(
        <div className='extensions-grid'>
            {/* Map all extensions to ExtensionCard components */}
            {extensions.map((extension, index: number) => 
                <ExtensionCard 
                    logo={getLogoPath(extension.logo)}
                    name={extension.name}
                    description={extension.description}
                    isActive={extension.isActive}
                    key={index} 
                    removeExtension={removeExtension}
                    toggleActive={toggleActive}
                />
            )}
        </div>
    )
}
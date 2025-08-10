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

    // Dynamically import all SVGs from assets/images
    const logos = import.meta.glob('../../assets/images/*.svg', { eager: true, import: 'default' });

    // Helper function to get logo path by filename
    const getLogoPath = (logoName: string | undefined) => {
        if (!logoName) return '';
        const fileName = logoName.split('/').pop();
        const match = Object.entries(logos).find(([key]) => key.endsWith(fileName || ''));
        return match ? match[1] as string : '';
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
import { ExtensionCard } from '../ExtensionCard/ExtensionCard'
import './ExtensionsGrid.css'
import type React from 'react';

interface ExtensionsGridProps {
    extensions;
    removeExtension: (name: string) => void;
    toggleActive: (name: string) => void;
}

export const ExtensionsGrid: React.FC<ExtensionsGridProps> = ({extensions, removeExtension, toggleActive}) => {

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
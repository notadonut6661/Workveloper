namespace ClassNameManager {
    export function Add(Element:HTMLElement, ClassName: string): void {
        if (Element.className.match(`${ClassName}`)) return;
        console.log(ClassName, Element.className)
        Element.className += ` ${ClassName}`;
    }

    export function Remove(Element:HTMLElement, ClassName: string) {
        if (!Element.className.match(`${ClassName}`)) return;
        const classNames = Element.className.split(' ');

        Element.className = classNames.slice(0, classNames.indexOf(ClassName)).join(' ');
    }

    export function Get(Element: HTMLElement): string {
        return Element.className.split(' ')[0];
    }

    export function GetAll(Element: HTMLElement): string[] {
        return Element.className.split(' ');
    }
}

export default ClassNameManager;
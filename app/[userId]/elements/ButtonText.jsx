export default function ButtonText({fontClass, btnFontStyle, content}) {
    return (
        <span className={`${fontClass} w-full font-extrabold truncate max-w-[100%] flex-1 flex items-center justify-center`} style={btnFontStyle}>{content}</span>
    );
}
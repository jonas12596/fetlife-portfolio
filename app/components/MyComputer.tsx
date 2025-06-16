"use client"
export default function MyComputer({ windowMin }: { windowMin: boolean }) {

    function handleDragWin(e: React.MouseEvent<HTMLElement>) {
        const header = e.currentTarget;
        const parent = header.parentElement;
        if (!parent) return;

        let startX = e.clientX;
        let startY = e.clientY;
        let startLeft = parent.offsetLeft;
        let startTop = parent.offsetTop;

        function onMouseMove(e: MouseEvent) {
            const newLeft = startLeft + (e.clientX - startX);
            const newTop = startTop + (e.clientY - startY);
            if (parent) {
                parent.style.left = `${newLeft}px`;
                parent.style.top = `${newTop}px`;
            }
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    return (
        <div className={windowMin ? "z-10 relative border-[#0052e6] lg:translate-x-[20rem] lg:translate-y-10 rounded-tl-lg rounded-tr-lg border-l-2 border-b-2 border-r-2 w-full lg:w-3/5 h-full lg:h-3/4 flex bg-gradient-to-r from-[#f2f4f1] to-[#f0eddc]" : "relative border-[#0052e6] rounded-tl rounded-tr border-l-2 border-b-2 border-r-2 w-full lg:w-3/5 h-full lg:h-3/4 hidden bg-white"}>
            <header
                className="cursor-pointer w-full flex items-center justify-between h-9 p-2 border-l border-r border-[#0067fc] bg-gradient-to-b from-[#0067fc] to-[#0258e3] rounded-tl rounded-tr shadow-inner"
                onMouseDown={handleDragWin}
            >
                <div className="absolute inset-0 rounded-r pointer-events-none">
                    <div className="absolute top-0 rounded-tl rounded-tr z-0 left-0 w-full h-2 rounded-r bg-[#829cfa10] blur-[1px]"></div>
                </div>
                <div className="flex items-center gap-1 z-20">
                    <p className="text-white text-sm">System Preferences</p>
                </div>
            </header>
        </div>
    )
}
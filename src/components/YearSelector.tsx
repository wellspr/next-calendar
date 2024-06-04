import { useEffect, useRef } from "react";

export default function YearSelector({
    year,
    setYear,
    nextYear,
    prevYear,
    editable,
    setEditable
}: {
    year: number,
    setYear: React.Dispatch<React.SetStateAction<number>>
    nextYear: () => void,
    prevYear: () => void,
    editable: boolean,
    setEditable: React.Dispatch<React.SetStateAction<boolean>>
}) {

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
		const onBodyClick = (e: MouseEvent) => {
			const currentInput = ref.current;

			if (editable) {
				if (currentInput) {
					if (!currentInput.contains(e.target as Node)) {
						setEditable(false);
					}
				}
			}
		};

		document.body.addEventListener("click", onBodyClick);

		return () => {
			document.body.removeEventListener("click", onBodyClick);
		}
	}, [editable, setEditable]);

    return (
        <div className="yearSelector">
            <button onClick={prevYear}>{"<"}</button>
            {editable ?
                <form onSubmit={e => {
                    e.preventDefault();
                    setEditable(false);
                }}>
                    <input
                        ref={ref}
                        type="number"
                        id="currentYearInput"
                        className="currentYearInput"
                        value={year}
                        onChange={e => setYear(Number(e.target.value))}
                        onBlur={() => setEditable(false)}
                    />
                </form> :
                <div className="currentYear" onClick={() => {
                    setEditable(true);
                }}>{year}</div>
            }
            <button onClick={nextYear}>{">"}</button>
        </div>
    );
}

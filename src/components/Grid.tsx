import React, {useMemo} from "react";
import useMeasure from "react-use-measure";

interface GridProps {
    children: typeof GridItem[];
}

function Grid({children}: GridProps) {
    const columns = 5;
    const [ref, { width }] = useMeasure();



    // const [heights, gridItems] = useMemo(() => {
    //     let heights = new Array(columns).fill(0) // Eacsh column gets a height starting with zero
    //     let gridItems = children.map((child, i) => {
    //         const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    //         const x = (width / columns) * column // x = container width / number of columns * column index,
    //         const y = (heights[column] += child.height / 2) - child.height / 2 // y = it's just the height of the current column
    //         return {...child, x, y, width: width / columns, height: child.height / 2}
    //     })
    //     return [heights, gridItems]
    // }, [columns, items, width])

    return (
        <>{children}</>
    )
}

interface GridItemProps {

}

function GridItem({}: GridItemProps) {
    const [ref, {height}] = useMeasure()

    return (
        <div ref={ref}>

        </div>
    )
}

export default Grid;

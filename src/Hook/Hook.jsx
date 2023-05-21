import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Toy Zone`;
    }, [title])
}

export default useTitle;
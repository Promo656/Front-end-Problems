import {renderHook} from "@testing-library/react-hooks"
import {useTitle} from "courses/TestingRoutesHooks/src/hooks/useTitle/useTitle";

test("Should set document title", async () => {
    renderHook(() => useTitle("test"))
    expect(document.title).toBe("test")
})
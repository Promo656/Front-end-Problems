import {act, renderHook} from "@testing-library/react-hooks";
import {useNoteField} from "./useNoteField";

test("useNote returns an empty string in the initial render", () => {
    const {result} = renderHook(() => useNoteField())
    expect(result.current.note).toBe("")
})

test("After handleNoteChange is called, note returns the updated note", () => {
    const {result} = renderHook(() => useNoteField())

    act(() => result.current.handleNoteChange({currentTarget: {value: "test"}}))

    expect(result.current.note).toBe("test")
})
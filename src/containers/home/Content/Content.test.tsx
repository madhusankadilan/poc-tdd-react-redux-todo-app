// import { render, screen, vi } from '../../../utils/test-utils';
// import Content from "./Content.tsx";
// import React from "react";
// import {StatusList} from "../../../data.ts";

// type TStatusList = [StatusList, React.Dispatch<React.SetStateAction<StatusList>>];

// describe('Content test', () => {
//     test('the placeholder is visible, if no data found', () => {
//         const setState = vi.fn<TStatusList, StatusList>();
//         vi
//             .spyOn(React, 'useState')
//             .mockImplementationOnce((initState: StatusList) => [initState, setState] as TStatusList);
//         render(<Content />)
//         expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
//     })
// })
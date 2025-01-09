import { PaletteStyleTag } from '@rocket.chat/fuselage';
import React from 'react';

import { codeBlock } from '../lib/codeBlockStyles';

export const MainLayoutStyleTags = () => {
	return (
		<>
			<PaletteStyleTag theme='light' selector='.rcx-content--main, .rcx-tile' tagId='main-palette-light' />
			<PaletteStyleTag theme='dark' selector='.rcx-sidebar--main, .rcx-navbar' tagId='sidebar-palette' />
			<PaletteStyleTag theme='dark' selector='.rcx-content--main' palette={codeBlock} tagId='codeBlock-palette' />
		</>
	);
};

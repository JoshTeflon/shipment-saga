import React, { SVGProps } from 'react';

export interface SidenavItem {
  icon: React.FC<SVGProps<SVGSVGElement>>
  item: string
}
'use client'

import { AgencySidebarOption, SubAccount, SubAccountSidebarOption } from 'prisma/prisma-client';
import React, { useEffect, useMemo, useState } from 'react';
import { Sheet, SheetTrigger } from '../ui/sheet';

type Props = {
  defaultOpened?: boolean,
  subAccounts: SubAccount[],
  sidebarOpt: AgencySidebarOption[] | SubAccountSidebarOption[],
  sidebarLogo: string,
  details: any,
  user: any,
  id: string,
}

const MenuOptions = ({
  details,
  id,
  sidebarLogo,
  sidebarOpt,
  subAccounts,
  user,
  defaultOpened
}: Props) => {
  const [ isMounted, setIsMounted ] = useState(false);

  const openState = useMemo(
    () => (defaultOpened ? { open: true } : {}), [ defaultOpened ]
  );

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return;

  return (
    <Sheet
      modal={false}
      {...openState}
    >
      <SheetTrigger
        asChild
        className='absolute left-4 top-4 z-[100] md:!hidden flex'
      >

      </SheetTrigger>
    </Sheet>
  )
}

export default MenuOptions;
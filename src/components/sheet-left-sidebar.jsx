import { AlignLeftIcon, CrossIcon } from 'lucide-react'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from './ui/button';
import { DialogTitle } from '@radix-ui/react-dialog';
function SheetLeftBar() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon className="!w-[1.25rem] !h-[1.25rem]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <CrossIcon />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            {/* <NavMenu isSheet /> */}
          </div>
          <div className="ml-2 pl-5">
            {/* <DocsMenu isSheet /> */}
          </div>
          <div className="p-6 pb-4 flex gap-2.5">
            {/* <FooterButtons /> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SheetLeftBar
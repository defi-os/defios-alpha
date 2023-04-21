import cn from 'classnames';
import AuthorCard from '@/components/ui/author-card';
import Logo from '@/components/ui/logo';
import { MenuItem } from '@/components/ui/collapsible-menu';
import Scrollbar from '@/components/ui/scrollbar';
import Button from '@/components/ui/button';
import { useDrawer } from '@/components/drawer-views/context';
import { Close } from '@/components/icons/close';
import { menuItems } from '@/layouts/sidebar/_menu-items';
//images
import { useAppSelector } from '@/store/store';
import { useWallet } from '@solana/wallet-adapter-react';

import Link from 'next/link';

export default function Sidebar({ className }: { className?: string }) {
  const { closeDrawer } = useDrawer();
  const githubInfo = useAppSelector((state) => state.userInfo.githubInfo);
  const wallet = useWallet();
  return (
    <aside
      className={cn(
        'top-0 left-0 z-40 h-full w-full max-w-full border-r border-dashed border-gray-700 bg-dark xs:w-[20rem] xl:fixed  xl:w-[20rem] 2xl:w-[20rem]',
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>

      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-5 2xl:px-8">
          <Link href="/profile">
            <AuthorCard
              image={githubInfo?.avatar_url || ''}
              name={githubInfo?.name || ''}
              role={githubInfo?.login || ''}
            />
          </Link>

          <div className="mt-5">
            {menuItems.map((item, index) => (
              <MenuItem
                key={'default' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                comingSoon={item.comingSoon || undefined}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </aside>
  );
}

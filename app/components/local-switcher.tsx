'use client'

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react'

function LocalSwitcher() {
    const [isPending, startTransition] = useTransition();
    const t = useTranslations('Label');
    const router = useRouter();
    const localActive = useLocale();
    
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    }

    return (
        <div>
            <label>
                <p>{t('change-language')}</p>
                <select
                    defaultValue={localActive}
                    onChange={onSelectChange}
                    disabled={isPending}
                >
                    <option value="en">English</option>
                    <option value="vi">Việt Nam</option>
                </select>
            </label>
            {isPending && <p>Loading...</p>}
        </div>
    )
}

export default LocalSwitcher

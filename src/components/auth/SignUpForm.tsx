'use client';

import { ChangeEvent } from 'react';

import { FormCard } from '@/components/auth/FormCard';
import FormMessage from '@/components/auth/FormMessage';
import Submit from '@/components/auth/Submit';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormValidate } from '@/hooks/useFormValidate';
import { SignUpSchema } from '@/schemas/auth';
import { TSignUpFormError } from '@/types/form';

export default function SignUpForm() {
    const { errors, validateField } =
        useFormValidate<TSignUpFormError>(SignUpSchema);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    return (
        <FormCard
            title="회원가입"
            footer={{ label: '이미 계정이 있으신가요?', href: '/login' }}
        >
            <form action="" className={'space-y-6'}>
                <div className={'space-y-1'}>
                    <Label htmlFor="name">이름</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="이름을 입력해주세요"
                        error={!!errors?.name}
                        onChange={handleChange}
                    />
                    {errors?.name && <FormMessage message={errors?.name[0]} />}
                </div>
                <div className={'space-y-1'}>
                    <Label htmlFor="name">이메일</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        error={!!errors?.email}
                        onChange={handleChange}
                    />
                    {errors?.email && (
                        <FormMessage message={errors?.email[0]} />
                    )}
                </div>
                <div className={'space-y-1'}>
                    <Label htmlFor="name">비밀번호</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="**********"
                        error={!!errors?.password}
                        onChange={handleChange}
                    />
                    {errors?.password && (
                        <FormMessage message={errors?.password[0]} />
                    )}
                </div>
                <Submit className={'w-full'}>가입하기</Submit>
            </form>
        </FormCard>
    );
}

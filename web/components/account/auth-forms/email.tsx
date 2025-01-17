import { FC, FormEvent, useMemo, useState } from "react";
import { observer } from "mobx-react-lite";
// icons
import { CircleAlert, XCircle } from "lucide-react";
// types
import { IEmailCheckData } from "@plane/types";
// ui
import { Button, Input, Spinner } from "@plane/ui";
// helpers
import { checkEmailValidity } from "@/helpers/string.helper";

type TAuthEmailForm = {
  defaultEmail: string;
  onSubmit: (data: IEmailCheckData) => Promise<void>;
};

export const AuthEmailForm: FC<TAuthEmailForm> = observer((props) => {
  const { onSubmit, defaultEmail } = props;
  // states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState(defaultEmail);

  const emailError = useMemo(
    () => (email && !checkEmailValidity(email) ? { email: "Email is invalid" } : undefined),
    [email]
  );

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const payload: IEmailCheckData = {
      email: email,
    };
    await onSubmit(payload);
    setIsSubmitting(false);
  };

  const isButtonDisabled = email.length === 0 || Boolean(emailError?.email) || isSubmitting;

  return (
    <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
      <div className="space-y-1">
        <label className="text-sm text-onboarding-text-300 font-medium" htmlFor="email">
          Email
        </label>
        <div className="relative flex items-center rounded-md bg-onboarding-background-200">
          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={Boolean(emailError?.email)}
            placeholder="name@company.com"
            className="h-[46px] w-full border border-onboarding-border-100 pr-12 placeholder:text-onboarding-text-400"
            autoFocus
          />
          {email.length > 0 && (
            <XCircle
              className="absolute right-3 h-5 w-5 stroke-custom-text-400 hover:cursor-pointer"
              onClick={() => setEmail("")}
            />
          )}
        </div>
        {emailError?.email && (
          <p className="flex items-center gap-1 text-xs text-red-600 px-0.5">
            <CircleAlert height={12} width={12} />
            {emailError.email}
          </p>
        )}
      </div>
      <Button type="submit" variant="primary" className="w-full" size="lg" disabled={isButtonDisabled}>
        {isSubmitting ? <Spinner height="20px" width="20px" /> : "Continue"}
      </Button>
    </form>
  );
});

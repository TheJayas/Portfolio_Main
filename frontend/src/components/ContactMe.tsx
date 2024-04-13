import { BackgroundGradientAnimation } from "./ui/background-gradient-animation"
import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../@/components/ui/form"
import { Input } from "../../@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react";
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username is required.",
  }),
  email: z.string().min(1, {
    message: "Email is required.",
  }).email({message: "Email is invalid."}),
  message: z.string().min(2, {
    message: "Message is required.",
  }),
})
 
const ContactMe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })
  return (
    <BackgroundGradientAnimation>
      <div className="h-screen w-screen z-10 flex felx-col pt-32 container pl-32 bg-grey-200">
        <Card className="mx-auto max-w-[500px] z-40 border-2 border-zinc-400 rounded-3xl px-16 flex flex-col justify-center">
          <CardHeader>
              <CardTitle>
                  <h2 className="font-semibold text-zinc-300 text-5xl pb-5">Contact Me</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(()=>{})}
                        className="space-y-8"
                    >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Username</FormLabel>
                                <FormControl>
                                    <Input className="rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-800 border-2 font-mono text-white"
                                        placeholder="John Doe"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Email</FormLabel>
                                <FormControl>
                                    <Input className="text-white rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-800 border-2 font-mono"
                                        placeholder="john@gmail.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-300 ">Message</FormLabel>
                                <FormControl>
                                    <Input className="text-white rounded-xl p-2 flex flex-row item-center justify-center h-10 bg-transparent border-zinc-800 border-2 font-mono"
                                        placeholder="Type your message here"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                            </FormItem>
                        )}
                    />
                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="disabled:cursor-not-allowed bg-slate-300 rounded-xl w-28 z-40"
                        >
                            {form.formState.isSubmitting ? (
                                <>
                                    <Loader2
                                        size={16}
                                        className="mr-2 animate-spin"
                                    />
                                    Please Wait
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            </Card>
          </div>
     </BackgroundGradientAnimation>
  )
}

export default ContactMe

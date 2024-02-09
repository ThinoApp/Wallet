import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./DepenseAjout.scss";
import depenseFormSchema, { DepenseForm } from "../../interface/depense.form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { typeDepense } from "@/containers/DepenseContainer/depense.utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const DepenseAjout = () => {
  const form = useForm<DepenseForm>({
    resolver: zodResolver(depenseFormSchema),
    defaultValues: {
      label: "",
      category: "",
      date: new Date(),
      price: 0,
      quantity: 0,
    },
  });

  const onSubmit = (values: DepenseForm) => {
    console.log(values);
  };

  return (
    <div className="DepenseAjout">
      <h3>Nouveau</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-[#383838] p-8 rounded-md"
        >
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="form-label">Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="focus:ring-0 w-full  input-style">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {typeDepense.map((item) => (
                        <SelectItem value={item.toString()}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between gap-4 ">
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="form-label">Label</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="form-label">Quantité</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Quantité"
                      {...field}
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row justify-between gap-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="form-label">Montant</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Montant"
                      {...field}
                      className="input-style"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="form-label">Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-[240px] pl-3 text-left font-normal !bg-[#DB5151] hover:!bg-red ${
                            !field.value ? "text-primary-foreground" : ""
                          }`}
                        >
                          {field.value ? (
                            <span className="text-white">
                              {format(field.value, "PPP", { locale: fr })}
                            </span>
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-100 text-white" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 mb-2" align="start">
                      <Calendar
                        className="Custom-calendar bg-secondary  border-[1px] shadow-red-500 shadow-lg rounded-md overflow-hidden"
                        classNames={{
                          day_selected: "bg-red hover:bg-red dark:hover:bg-red",
                          day_today: "bg-red",
                          nav: "bg-red",
                          button: "dark:hover:!bg-red",
                        }}
                        locale={fr}
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="btn-container flex flex-row items-center gap-4">
            <Button
              onClick={() => form.reset()}
              type="reset"
              className="w-full !font-lato !font-semibold !text-[#DB5151] uppercase"
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="w-full !font-lato !font-semibold !bg-[#DB5151] !text-white uppercase"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default DepenseAjout;

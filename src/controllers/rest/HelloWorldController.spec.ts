import { PlatformTest } from "@tsed/common";
import { object } from "@tsed/schema";
import { HelloWorldController } from "./HelloWorldController";
import { Telefono } from "./HelloWorldController";




describe("HelloWorldController", () => {
  beforeEach(PlatformTest.create);
  afterEach(PlatformTest.reset);

  it("should do something", () => {
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    // const instance = PlatformTest.invoke<HelloWorldController>(HelloWorldController); // get fresh instance

    expect(instance).toBeInstanceOf(HelloWorldController);
  });

  it ("Funcion texto", ()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    expect(instance.Texto()).toBe("Hola esta es una funcion que retorna texto");
  })

  it ("Funcion Multiplicacion", ()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    const a =2;
    const b =2;
    expect(instance.Multiplicacion(a,b)).toBe(4);
  })

  it ("Dame un OnePlus 5t", ()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);

    expect(instance.DameUnCarro().linea).toBe("5t");
  })

  it ("Texto Alrevez", ()=>{
    const instance = PlatformTest.get<HelloWorldController>(HelloWorldController);
    jest.spyOn(instance, "TextoAlrevez").mockReturnValueOnce("said");
    expect(instance.TextoAlrevez("Hola")).toStrictEqual("said");
    expect(instance.TextoAlrevez("Hola")).toBe("aloH");

  })


});


